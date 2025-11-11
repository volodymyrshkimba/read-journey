import PageWrapper from "../components/PageWrapper/PageWrapper";
import DashboardWrapper from "../components/DashboardWrapper/DashboardWrapper";
import PageMainWrapper from "../components/PageMainWrapper/PageMainWrapper";
import RecommendedFilters from "../components/RecommenededFilters/RecommendedFilters";
import StartYourWorkout from "../components/StartYourWorkout/StartYourWorkout";

const RecommendedPage = () => {
  return (
    <PageWrapper>
      <DashboardWrapper>
        <RecommendedFilters />
        <StartYourWorkout />
      </DashboardWrapper>
      <PageMainWrapper title={"Recommended"}>recommended</PageMainWrapper>
    </PageWrapper>
  );
};

export default RecommendedPage;
