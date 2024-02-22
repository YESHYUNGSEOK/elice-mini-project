import Search from "@/app/(CourseSearchPage)/components/Search/Search";
import Filter from "@/app/(CourseSearchPage)/components/Filter/Filter";
export default function Home() {
  return (
    <main className="container">
      <Search />
      <Filter />
    </main>
  );
}
