export type SchoolData = Schools & {
  routes: Routes[]
}

export type CategoryHeaderData = Category & {
  schools: SchoolData[]
}