type Categories = {
  id: number,
  name: string,
  colorDark: string,
}

type Schools = {
  id: number,
  title: string,
  badge_url: string,
  landing_url: string,
  description: string,
  categoryId: Categories["id"],
}

type SchoolSection = {
  id: number,
  title: string,
  description: string,
  schoolId: Schools["id"],
}

type Routes = {
  id: number,
  title: string,
  badge_url: string,
  landing_url: string,
  description: string,
  categoryId: Categories["id"],
  schoolSectionId: SchoolSection["id"]
}

type RouteModule = {
  id: number,
  title: string,
  description: string,
  level: "basic" | "intermediate" | "advanced"
  routeId: Routes["id"]
}

type Courses = {
  id: number,
  title: string,
  badge_url: string,
  teacher: null | string,
  first_class: string,
  landing_url: string,
  duration?: number | null
}



