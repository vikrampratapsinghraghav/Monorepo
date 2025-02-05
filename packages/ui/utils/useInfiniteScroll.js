import { useState, useEffect, useCallback } from "react";
import { fetchPosts } from "./api";

export const useInfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    
    const newPosts = await fetchPosts(page);
    setData((prev) => [...prev, ...newPosts]);
    setPage((prev) => prev + 1);
    
    setLoading(false);
  }, [page, loading]);

  useEffect(() => {
    loadMore();
  }, []);

  return { data, loadMore, loading };
};