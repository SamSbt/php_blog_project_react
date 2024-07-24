import ArticleCard from "../../components/articleCard/ArticleCard";
import "./HomeScreen.css"

function HomeScreen() {
  const article = {
    id_article: 1,
    title: "nulla ac enim in tempor",
    summary: "Fusce posuere felis sed lacus. Morbi sem mauris, l...",
    img_src: "https://picsum.photos/id/1/400/300",
    published_at: "09/05/2022",
    updated_at: "26/08/2023",
    is_deleted: true,
    is_appuser: 8,
    id_serie: 9,
  }



  return (
    <>
    <main className="mt-5 pt-3 mx-5 row">
      <ArticleCard article={article} />
    </main>
    </>
  );
}

export default HomeScreen;