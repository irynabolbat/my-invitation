import { Outlet } from "react-router-dom";
import { DetailsPage } from "../../pages/DetailsPage/DetailsPage";

export const DetailsLayout = () => {
  return (
    <>
      <DetailsPage />
      <Outlet />
    </>
  )
}