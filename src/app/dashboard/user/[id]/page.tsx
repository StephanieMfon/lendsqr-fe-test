import SingleUser from "@/components/Partials/Dashboard/SingleUser";

const SingleUserPage = ({ params }: { params: { id: string } }) => {
  return <SingleUser id={params.id} />;
};

export default SingleUserPage;
