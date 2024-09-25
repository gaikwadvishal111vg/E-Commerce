import Sidebar from "../Components/Sidebar/ListSidebar";






const Listing = () => {
    return (
<>
<section className="product_Listing_Page">
    <div className="container">
        <div className="productListing d-flex">
            <Sidebar/>
            <div className="content_right">
                right
            </div>
        </div>
    </div>
</section>
</>

    );
};
export default Listing;