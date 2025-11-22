import PageWrapper from "../components/PageWrapper/PageWrapper";
import DashboardWrapper from "../components/DashboardWrapper/DashboardWrapper";
import PageMainWrapper from "../components/PageMainWrapper/PageMainWrapper";
import AddBookForm from "../components/AddBookForm/AddBookForm";
import RecommendedBooks from "../components/RecommendedBooks/RecommendedBooks";

const MyLibraryPage = () => {
  return (
    <PageWrapper>
      <DashboardWrapper>
        <AddBookForm />
        <RecommendedBooks />
      </DashboardWrapper>
      <PageMainWrapper title={"My library"}>My library</PageMainWrapper>
    </PageWrapper>
  );
};

export default MyLibraryPage;
