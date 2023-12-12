
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      Course: {
        Row: {
          createdAt: string
          createdById: string | null
          id: string
          title: string
          updatedAt: string | null
          updatedById: string | null
        }
        Insert: {
          createdAt?: string
          createdById?: string | null
          id?: string
          title: string
          updatedAt?: string | null
          updatedById?: string | null
        }
        Update: {
          createdAt?: string
          createdById?: string | null
          id?: string
          title?: string
          updatedAt?: string | null
          updatedById?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Course_createdById_fkey"
            columns: ["createdById"]
            isOneToOne: false
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Course_updatedById_fkey"
            columns: ["updatedById"]
            isOneToOne: false
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
      }
      McqQuestion: {
        Row: {
          correctOption: number
          explanation: string
          id: string
          options: string[] | null
          question: string
          topicId: string
        }
        Insert: {
          correctOption: number
          explanation: string
          id?: string
          options?: string[] | null
          question: string
          topicId: string
        }
        Update: {
          correctOption?: number
          explanation?: string
          id?: string
          options?: string[] | null
          question?: string
          topicId?: string
        }
        Relationships: [
          {
            foreignKeyName: "McqQuestion_topicId_fkey"
            columns: ["topicId"]
            isOneToOne: false
            referencedRelation: "Topic"
            referencedColumns: ["id"]
          }
        ]
      }
      Profile: {
        Row: {
          city: string
          email: string | null
          firstName: string
          id: string
          lastName: string
          mobile: string | null
          state: string
        }
        Insert: {
          city: string
          email?: string | null
          firstName: string
          id: string
          lastName: string
          mobile?: string | null
          state: string
        }
        Update: {
          city?: string
          email?: string | null
          firstName?: string
          id?: string
          lastName?: string
          mobile?: string | null
          state?: string
        }
        Relationships: []
      }
      Stage: {
        Row: {
          courseId: string
          createdAt: string
          createdById: string | null
          id: string
          title: string
          updatedAt: string | null
          updatedById: string | null
        }
        Insert: {
          courseId: string
          createdAt?: string
          createdById?: string | null
          id?: string
          title: string
          updatedAt?: string | null
          updatedById?: string | null
        }
        Update: {
          courseId?: string
          createdAt?: string
          createdById?: string | null
          id?: string
          title?: string
          updatedAt?: string | null
          updatedById?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Stage_courseId_fkey"
            columns: ["courseId"]
            isOneToOne: false
            referencedRelation: "Course"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Stage_createdById_fkey"
            columns: ["createdById"]
            isOneToOne: false
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Stage_updatedById_fkey"
            columns: ["updatedById"]
            isOneToOne: false
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
      }
      Subject: {
        Row: {
          createdAt: string
          createdById: string | null
          description: string
          id: string
          stageId: string
          title: string
          updatedAt: string | null
          updatedById: string | null
        }
        Insert: {
          createdAt?: string
          createdById?: string | null
          description: string
          id?: string
          stageId: string
          title: string
          updatedAt?: string | null
          updatedById?: string | null
        }
        Update: {
          createdAt?: string
          createdById?: string | null
          description?: string
          id?: string
          stageId?: string
          title?: string
          updatedAt?: string | null
          updatedById?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Subject_createdById_fkey"
            columns: ["createdById"]
            isOneToOne: false
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Subject_stageId_fkey"
            columns: ["stageId"]
            isOneToOne: false
            referencedRelation: "Stage"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Subject_updatedById_fkey"
            columns: ["updatedById"]
            isOneToOne: false
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
      }
      Topic: {
        Row: {
          createdAt: string
          createdById: string | null
          description: string
          id: string
          studyMaterial: string
          subjectId: string
          title: string
          updatedAt: string | null
          updatedById: string | null
          videoLink: string
        }
        Insert: {
          createdAt?: string
          createdById?: string | null
          description: string
          id?: string
          studyMaterial: string
          subjectId: string
          title: string
          updatedAt?: string | null
          updatedById?: string | null
          videoLink: string
        }
        Update: {
          createdAt?: string
          createdById?: string | null
          description?: string
          id?: string
          studyMaterial?: string
          subjectId?: string
          title?: string
          updatedAt?: string | null
          updatedById?: string | null
          videoLink?: string
        }
        Relationships: [
          {
            foreignKeyName: "Topic_createdById_fkey"
            columns: ["createdById"]
            isOneToOne: false
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Topic_subjectId_fkey"
            columns: ["subjectId"]
            isOneToOne: false
            referencedRelation: "Subject"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Topic_updatedById_fkey"
            columns: ["updatedById"]
            isOneToOne: false
            referencedRelation: "Profile"
            referencedColumns: ["id"]
          }
        ]
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
