import { Link } from "react-router-dom";
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'

const LatestPost = () => {
    const blogData = [
        {
            id: 1,
            date: "feb 22, 2023",
            category: 'gadgets',
            title: 'get some cool gadgets in 2023',
            image: blog1
        },
        {
            id: 2,
            date: "feb 22, 2023",
            category: 'technology',
            title: 'TECHNOLOGY HACK YOU WON’T GET',
            image: blog2
        },
        {
            id: 3,
            date: "feb 22, 2023",
            category: 'camera',
            title: 'toP 10 SMALL cAMERA IN THE WORLD',
            image: blog3
        },
    ]
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-3 md:px-0 py-10">
        <div>
          <div className="flex justify-between py-5 uppercase">
            <h5 className="text-2xl font-semibold">latest post</h5>
            <Link className="border-b-2 " to={"/shop"}>
              Read Blogs
            </Link>
          </div>
          <div className="md:flex gap-10 uppercase">
             {
                blogData.map(blog => (
                    <div key={blog.id} className="flex flex-col gap-2">
                        <img src={blog.image} alt="" />
                        <div className="flex gap-3 text-xs text-[#848484]">
                            <p>{blog.date}</p>
                            .
                            <p>{blog.category}</p>
                        </div>
                        <h5>{blog.title}</h5>
                    </div>
                ))
             }
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
