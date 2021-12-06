import React from "react";
import { Route,Routes } from "react-router";
import { useParams } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
const ShopPage = () => {
  let params = useParams();
  return(
  <div className="shop-page">
    
    <Routes>
    <Route exact path="/" element = {<CollectionsOverview />} />
    <Route path=":collectionId" element = {<CollectionPage match={params}/>} />
    </Routes>
  </div>
)};

export default ShopPage;
