import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { arrayOf } from 'prop-types';
import { categoryPropTypes } from '../../../proptypes/category';
import PostsList from '../../scenes/PostsList/PostsList';
import { postPropTypes } from '../../../proptypes/post';
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';
import Filter from '../../components/Filter/Filter';

const postPerPage = 3;

const Home = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);

  const {
    posts,
    categories,
  } = props;

  let filteredPosts = useMemo(() => {
    return posts.filter(
      post => post
        .title
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    ).filter(
      post => filter === 'all' ? true : post.categories.includes(Number(filter))
    )
  }, [searchQuery, filter]);

  const pages = Math.ceil(filteredPosts.length / postPerPage)

  const setSearchHandler = (val) => {
    setSearchQuery(val);
    setCurrentPage(0);
  }

  const setFilterHandler = (filter) => {
    setFilter(filter);
    setCurrentPage(0);
  }

  const paginationStart = currentPage * postPerPage;
  const paginationEnd = paginationStart + postPerPage;

  filteredPosts = filteredPosts.slice(paginationStart, paginationEnd);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-20 lg:pt-[120px] pb-10 lg:pb-5">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-10 max-w-[510px]">
                <h1
                  className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                  From the blog
                </h1>
                <p className="text-base text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa dicta itaque, nulla praesentium vero.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-end space-x-4 mb-10">
            <div className="basis-1/2">
              <Search
                setQuery={setSearchHandler}
                value={searchQuery}
              />
            </div>
            <div className="basis-1/2">
              <Filter
                options={categories}
                setFilter={setFilterHandler}
              />
            </div>
          </div>
          <PostsList
            posts={filteredPosts}
          />
          <Pagination
            page={currentPage}
            onSetPage={setCurrentPage}
            pages={pages}
          />
        </div>
      </main>
    </>
  );
}

Home.propTypes = {
  categories: arrayOf(categoryPropTypes).isRequired,
  posts: arrayOf(postPropTypes).isRequired,
}

export default Home;
