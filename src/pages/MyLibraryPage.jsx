import PageWrapper from "../components/PageWrapper/PageWrapper";
import DashboardWrapper from "../components/DashboardWrapper/DashboardWrapper";
import PageMainWrapper from "../components/PageMainWrapper/PageMainWrapper";

const MyLibraryPage = () => {
  return (
    <PageWrapper>
      <DashboardWrapper>form</DashboardWrapper>
      <PageMainWrapper title={"My library"}>My library</PageMainWrapper>
    </PageWrapper>
  );
};

export default MyLibraryPage;
