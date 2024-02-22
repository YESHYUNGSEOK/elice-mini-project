import Search from "@/app/(CourseSearchPage)/components/Search/Search";
import Filter from "@/app/(CourseSearchPage)/components/Filter/Filter";
import Body from "@/app/(CourseSearchPage)/components/Body/Body";

export default function Home() {
  return (
    <main className="container">
      <Search />
      <Filter />
      <Body />
    </main>
  );
}
