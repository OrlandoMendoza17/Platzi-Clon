export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Categories: {
        Row: {
          color: string | null
          color2: string | null
          created_at: string
          icon: string | null
          id: number
          name: string | null
        }
        Insert: {
          color?: string | null
          color2?: string | null
          created_at?: string
          icon?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          color?: string | null
          color2?: string | null
          created_at?: string
          icon?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      CourseClasses: {
        Row: {
          courseSectionId: number | null
          created_at: string
          duration: number | null
          id: number
          image: string | null
          link: string | null
          title: string | null
        }
        Insert: {
          courseSectionId?: number | null
          created_at?: string
          duration?: number | null
          id?: number
          image?: string | null
          link?: string | null
          title?: string | null
        }
        Update: {
          courseSectionId?: number | null
          created_at?: string
          duration?: number | null
          id?: number
          image?: string | null
          link?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "CourseClasses_courseSectionId_fkey"
            columns: ["courseSectionId"]
            isOneToOne: false
            referencedRelation: "CourseSections"
            referencedColumns: ["id"]
          },
        ]
      }
      CourseOpinions: {
        Row: {
          courseId: number | null
          created_at: string
          id: number
          likes: number | null
          name: string | null
          opinion: string | null
          user_image: string | null
          user_name: string | null
        }
        Insert: {
          courseId?: number | null
          created_at?: string
          id?: number
          likes?: number | null
          name?: string | null
          opinion?: string | null
          user_image?: string | null
          user_name?: string | null
        }
        Update: {
          courseId?: number | null
          created_at?: string
          id?: number
          likes?: number | null
          name?: string | null
          opinion?: string | null
          user_image?: string | null
          user_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "CourseOpinios_courseId_fkey"
            columns: ["courseId"]
            isOneToOne: false
            referencedRelation: "Courses"
            referencedColumns: ["id"]
          },
        ]
      }
      CourseProject: {
        Row: {
          courseId: number | null
          created_at: string
          description: string | null
          id: number
          image: string | null
          link: string | null
          title: string | null
        }
        Insert: {
          courseId?: number | null
          created_at?: string
          description?: string | null
          id?: number
          image?: string | null
          link?: string | null
          title?: string | null
        }
        Update: {
          courseId?: number | null
          created_at?: string
          description?: string | null
          id?: number
          image?: string | null
          link?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "CourseProject_courseId_fkey"
            columns: ["courseId"]
            isOneToOne: false
            referencedRelation: "Courses"
            referencedColumns: ["id"]
          },
        ]
      }
      CourseRelatedRoutes: {
        Row: {
          courseId: number | null
          created_at: string
          id: number
          routeId: number | null
        }
        Insert: {
          courseId?: number | null
          created_at?: string
          id?: number
          routeId?: number | null
        }
        Update: {
          courseId?: number | null
          created_at?: string
          id?: number
          routeId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "CourseRelatedRoutes_courseId_fkey"
            columns: ["courseId"]
            isOneToOne: false
            referencedRelation: "Courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "CourseRelatedRoutes_routeId_fkey"
            columns: ["routeId"]
            isOneToOne: false
            referencedRelation: "Routes"
            referencedColumns: ["id"]
          },
        ]
      }
      Courses: {
        Row: {
          badge_url: string | null
          certificate: string | null
          created_at: string
          date: string | null
          description: string | null
          duration: number | null
          first_class: string | null
          id: number
          landing_url: string | null
          level: string | null
          metrics: number | null
          opinions: number | null
          opinions_link: string | null
          practice_time: number | null
          prior_knowledge: string | null
          professor: string | null
          professorId: number | null
          schoolId: number | null
          software_requirements: string | null
          title: string | null
        }
        Insert: {
          badge_url?: string | null
          certificate?: string | null
          created_at?: string
          date?: string | null
          description?: string | null
          duration?: number | null
          first_class?: string | null
          id?: number
          landing_url?: string | null
          level?: string | null
          metrics?: number | null
          opinions?: number | null
          opinions_link?: string | null
          practice_time?: number | null
          prior_knowledge?: string | null
          professor?: string | null
          professorId?: number | null
          schoolId?: number | null
          software_requirements?: string | null
          title?: string | null
        }
        Update: {
          badge_url?: string | null
          certificate?: string | null
          created_at?: string
          date?: string | null
          description?: string | null
          duration?: number | null
          first_class?: string | null
          id?: number
          landing_url?: string | null
          level?: string | null
          metrics?: number | null
          opinions?: number | null
          opinions_link?: string | null
          practice_time?: number | null
          prior_knowledge?: string | null
          professor?: string | null
          professorId?: number | null
          schoolId?: number | null
          software_requirements?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Courses_professorId_fkey"
            columns: ["professorId"]
            isOneToOne: false
            referencedRelation: "Professors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Courses_schoolId_fkey"
            columns: ["schoolId"]
            isOneToOne: false
            referencedRelation: "Schools"
            referencedColumns: ["id"]
          },
        ]
      }
      CourseSections: {
        Row: {
          courseId: number | null
          created_at: string
          id: number
          title: string | null
        }
        Insert: {
          courseId?: number | null
          created_at?: string
          id?: number
          title?: string | null
        }
        Update: {
          courseId?: number | null
          created_at?: string
          id?: number
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "CourseSections_courseId_fkey"
            columns: ["courseId"]
            isOneToOne: false
            referencedRelation: "Courses"
            referencedColumns: ["id"]
          },
        ]
      }
      Professors: {
        Row: {
          created_at: string
          description: string | null
          details: string | null
          id: number
          image: string | null
          link: string | null
          name: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          details?: string | null
          id?: number
          image?: string | null
          link?: string | null
          name?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          details?: string | null
          id?: number
          image?: string | null
          link?: string | null
          name?: string | null
        }
        Relationships: []
      }
      RouteModules: {
        Row: {
          created_at: string
          id: number
          level: string | null
          routeId: number | null
          title: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          level?: string | null
          routeId?: number | null
          title?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          level?: string | null
          routeId?: number | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "RouteModules_routeId_fkey"
            columns: ["routeId"]
            isOneToOne: false
            referencedRelation: "Routes"
            referencedColumns: ["id"]
          },
        ]
      }
      RouteModules_Courses: {
        Row: {
          courseId: number | null
          created_at: string
          id: number
          routeModuleId: number | null
        }
        Insert: {
          courseId?: number | null
          created_at?: string
          id?: number
          routeModuleId?: number | null
        }
        Update: {
          courseId?: number | null
          created_at?: string
          id?: number
          routeModuleId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "RouteModules_Courses_courseId_fkey"
            columns: ["courseId"]
            isOneToOne: false
            referencedRelation: "Courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "RouteModules_Courses_routeModuleId_fkey"
            columns: ["routeModuleId"]
            isOneToOne: false
            referencedRelation: "RouteModules"
            referencedColumns: ["id"]
          },
        ]
      }
      Routes: {
        Row: {
          badge_url: string | null
          categoryId: number | null
          created_at: string
          description: string | null
          id: number
          landing_url: string | null
          schoolSectionId: number | null
          title: string | null
        }
        Insert: {
          badge_url?: string | null
          categoryId?: number | null
          created_at?: string
          description?: string | null
          id?: number
          landing_url?: string | null
          schoolSectionId?: number | null
          title?: string | null
        }
        Update: {
          badge_url?: string | null
          categoryId?: number | null
          created_at?: string
          description?: string | null
          id?: number
          landing_url?: string | null
          schoolSectionId?: number | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Routes_categoryId_fkey"
            columns: ["categoryId"]
            isOneToOne: false
            referencedRelation: "Categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Routes_schoolSectionId_fkey"
            columns: ["schoolSectionId"]
            isOneToOne: false
            referencedRelation: "SchoolSections"
            referencedColumns: ["id"]
          },
        ]
      }
      Routes_Courses: {
        Row: {
          courseId: number | null
          created_at: string
          id: number
          routeId: number | null
        }
        Insert: {
          courseId?: number | null
          created_at?: string
          id?: number
          routeId?: number | null
        }
        Update: {
          courseId?: number | null
          created_at?: string
          id?: number
          routeId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Routes_Courses_courseId_fkey"
            columns: ["courseId"]
            isOneToOne: false
            referencedRelation: "Courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Routes_Courses_routeId_fkey"
            columns: ["routeId"]
            isOneToOne: false
            referencedRelation: "Routes"
            referencedColumns: ["id"]
          },
        ]
      }
      Schools: {
        Row: {
          badge_url: string | null
          categoryId: number | null
          created_at: string
          description: string | null
          id: number
          landing_url: string | null
          title: string | null
        }
        Insert: {
          badge_url?: string | null
          categoryId?: number | null
          created_at?: string
          description?: string | null
          id?: number
          landing_url?: string | null
          title?: string | null
        }
        Update: {
          badge_url?: string | null
          categoryId?: number | null
          created_at?: string
          description?: string | null
          id?: number
          landing_url?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Schools_categoryId_fkey"
            columns: ["categoryId"]
            isOneToOne: false
            referencedRelation: "Categories"
            referencedColumns: ["id"]
          },
        ]
      }
      Schools_Routes: {
        Row: {
          created_at: string
          id: number
          routeId: number | null
          schoolId: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          routeId?: number | null
          schoolId?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          routeId?: number | null
          schoolId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Schools_Routes_routeId_fkey"
            columns: ["routeId"]
            isOneToOne: false
            referencedRelation: "Routes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Schools_Routes_schoolId_fkey"
            columns: ["schoolId"]
            isOneToOne: false
            referencedRelation: "Schools"
            referencedColumns: ["id"]
          },
        ]
      }
      SchoolSections: {
        Row: {
          created_at: string
          description: string | null
          id: number
          schoolId: number | null
          title: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          schoolId?: number | null
          title?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          schoolId?: number | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "SchoolSections_schoolId_fkey"
            columns: ["schoolId"]
            isOneToOne: false
            referencedRelation: "Schools"
            referencedColumns: ["id"]
          },
        ]
      }
      SchoolSections_Routes: {
        Row: {
          created_at: string
          id: number
          routeId: number | null
          schoolSectionId: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          routeId?: number | null
          schoolSectionId?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          routeId?: number | null
          schoolSectionId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "SchoolSections_Routes_routeId_fkey"
            columns: ["routeId"]
            isOneToOne: false
            referencedRelation: "Routes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "SchoolSections_Routes_schoolSectionId_fkey"
            columns: ["schoolSectionId"]
            isOneToOne: false
            referencedRelation: "SchoolSections"
            referencedColumns: ["id"]
          },
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
