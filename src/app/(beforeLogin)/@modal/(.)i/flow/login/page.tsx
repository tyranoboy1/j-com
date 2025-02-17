import LoginModal from "@/app/(beforeLogin)/_components/LoginModal";

//NOTE 인터셉팅 라우트 => Link를 통해 접근했을때 경로를 가로챈다.
const Page = () => {
  return (
    <>
      가로채기 성공
      <LoginModal />
    </>
  );
};

export default Page;
