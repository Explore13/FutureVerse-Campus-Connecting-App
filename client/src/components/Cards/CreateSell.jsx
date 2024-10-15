import {useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {createMarketPost, fetchMarkets} from "../../redux/slices/MarketSlice.js";



const CreateSell = ({toggleCreateSell}) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(''); // State for image
  const [price, setPrice] = useState(''); // State for price

  const userId = useSelector((state) => state.auth.user.userId);
  
  const handleSubmit = async(e) => {
    e.preventDefault();

    // Handle form submission (e.g., send data to backend)
    console.log("Form submitted:", { description, image, price });

    const formData = new FormData();
    formData.append('content', description);
    formData.append('createdBy', userId);
    formData.append('image', image);
    formData.append('price', price);
    const actionResult = await dispatch(createMarketPost(formData));
    if (createMarketPost.fulfilled.match(actionResult)) {
      dispatch(fetchMarkets());
      setDescription('');
      setImage(''); // Clear the image file
      setPrice('');
      // Call toggleCreatePost to close the form
      toggleCreateSell();
    } else {
      // Handle submission error if needed
      console.error('Error creating Market:', actionResult.error.message);
    }
  };




  return (
    <div className="w-full max-w-xs  border p-4 rounded-lg  bg-gray-100 m-5">
      <h2 className="text-xl font-bold text-center mb-4">Create a New Sell</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="border rounded-lg py-2 px-3 w-full"
            id="description"
            value={description}
            required={true}
            onChange={(e)=> setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            className="border rounded-lg py-2 px-3 w-full"
            type="file"
            id="image"
            required={true}
            name="image" accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="border rounded-lg py-2 px-3 w-full"
            type="number"
            required={true}
            id="price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-blue-300" type="submit">
          Create Sell
        </button>
        </div>
      </form>
    </div>
  );
}

export default CreateSell;
