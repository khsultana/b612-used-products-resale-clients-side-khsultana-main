import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";

const Product = () => {
  // const [product, setProduct] = useState([]);

  const { data: product = [] } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch(
        "https://b612-used-products-resale-server-side-khsultana-khsultana.vercel.app/product"
      ).then((res) => res.json()),

    // const { data: product = [] } = useQuery({
    //   queryKey: ["product"],
    //   queryFn: () =>
    //     fetch("https://server-wine-xi.vercel.app/product").then((res) =>
    //       res.json()
    //     ),
  });
  // // useEffect(() => {
  // //   fetch("https://server-wine-xi.vercel.app/product")
  // //     .then((res) => res.json())
  // //     .then((data) => setProduct(data));
  // });
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-semibold">
          Get Our{" "}
          <span className="text-5xl font-bold text-red-700 my-6">
            Best Offers
          </span>
        </h2>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center grid grid-cols-1 gap-5  mt-10">
        <button className=" font-thin border-none rounded btn bg-gradient-to-r from-red-600 to-red-600 hover:from-pink-500 hover:to-yellow-500">
          Popular Cars
        </button>
        <button className="font-thin border-none rounded btn bg-gradient-to-r from-red-600 to-red-600 hover:from-pink-500 hover:to-yellow-500">
          Business Cars
        </button>
        <button className="font-thin border-none rounded btn bg-gradient-to-r from-red-600 to-red-600 hover:from-pink-500 hover:to-yellow-500">
          Family Cars
        </button>
        <button className="font-thin border-none rounded btn bg-gradient-to-r from-red-600 to-red-600 hover:from-pink-500 hover:to-yellow-500">
          Sports Cars
        </button>
        <button className="font-thin border-none rounded btn bg-gradient-to-r from-red-600 to-red-600 hover:from-pink-500 hover:to-yellow-500">
          Limited Edition Cars
        </button>
      </div>
      <h2 className="text-center text-4xl font-bold mt-4 my-4">
        All Category Car : 0{product.length}
      </h2>

      <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-2">
        {product.map((products) => (
          <ProductCard key={products._id} products={products}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Product;
