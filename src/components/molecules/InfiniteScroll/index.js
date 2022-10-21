import React from "react";

import InfiniteScrollComponent from "react-infinite-scroll-component";

import ItemInfiniteScroll from "components/atoms/ItemInfiniteScroll";

import "./styles.scss";

const InfiniteScroll = ({ elements, hasMore, fetchMoreData, showLinks }) => {

  return <div>
        <InfiniteScrollComponent
          dataLength={elements.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Cargando...</h4>}
          endMessage={<h4>No hay mas preguntas</h4>}
          scrollableTarget="right-layout-content"
        >
          {elements.map((i, index) => (
            <div key={index}>
              <ItemInfiniteScroll element={i} showLinks={showLinks}/>
            </div>
          ))}
        </InfiniteScrollComponent>
      </div>
    
}

export default InfiniteScroll;
