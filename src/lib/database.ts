export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          content: string
          slug: string
          featured_image?: string
          published: boolean
          category_id?: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          content: string
          slug: string
          featured_image?: string
          published?: boolean
          category_id?: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          content?: string
          slug?: string
          featured_image?: string
          published?: boolean
          category_id?: string
        }
      }
      categories: {
        Row: {
          id: string
          created_at: string
          name: string
          slug: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          slug: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          slug?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 