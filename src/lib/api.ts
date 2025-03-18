import { supabase } from './supabase'
import { Database } from './database'

export type Post = Database['public']['Tables']['posts']['Row'] & {
  categories?: Database['public']['Tables']['categories']['Row']
}

export type Category = Database['public']['Tables']['categories']['Row']

export async function getAllPosts(): Promise<Post[]> {
  const { data: posts, error } = await supabase
    .from('posts')
    .select(`
      *,
      categories (
        id,
        name,
        slug
      )
    `)
    .eq('published', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts:', error)
    throw error
  }

  return posts
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data: post, error } = await supabase
    .from('posts')
    .select(`
      *,
      categories (
        id,
        name,
        slug
      )
    `)
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error) {
    if (error.code === 'PGRST116') {
      // PGRST116 error code means no rows returned
      return null
    }
    console.error('Error fetching post:', error)
    throw error
  }

  return post
}

export async function getAllCategories(): Promise<Category[]> {
  const { data: categories, error } = await supabase
    .from('categories')
    .select('*')
    .order('name', { ascending: true })

  if (error) {
    console.error('Error fetching categories:', error)
    throw error
  }

  return categories
} 