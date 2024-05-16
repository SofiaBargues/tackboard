import { prisma } from "@/utils/prisma";
import Todo from "@/components/shared/Todo";
import SideBar from "@/components/shared/SideBar";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      mensaje: true,
      isCompleted: true,
      pinColor: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data.map((todo) => {
    return { ...todo };
  });
}

const Home = async () => {
  const data = await getData();

  return (
    <div>
      <NavBar />
      <div className=" flex justify-center flex-col bg-background items-center md:p-10">
        <div className="bg-opacity-60 w-full border-[16px]  border-accent/90 bg-[url(https://img.freepik.com/free-photo/wood-board-background_1339-5418.jpg?t=st=1714152936~exp=1714156536~hmac=09b0e4513c9138adec1d738f0d8cd3a2aa2fdae9986b382e3a62648772f21918&w=1380)] ">
          <div className="flex justify-center items-center  flex-col w-full py-10 md:p-20">
            <div className="flex justify-center  w-full items-center">
              <SideBar disabled={data.length >= 12} />
            </div>
            <div className="grid  grid-cols-[repeat(auto-fill,_minmax(330px,_1fr))] gap-10 m-auto   mt-10 w-full">
              {data.map((todo) => (
                <Todo todo={todo} key={todo.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
