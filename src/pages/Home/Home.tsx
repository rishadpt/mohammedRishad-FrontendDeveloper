import { Heading, VStack } from "@chakra-ui/react";
import Banner from "./HomeSections/Banner/Banner";
import DataTable from "../../components/Table/Table";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch/useAppDispatch";
import { fetchCapsules } from "../../features/capsules/capsuleAction";
import { useAppSelector } from "../../hooks/useAppSelector/useAppSelector";
import Pagination from "../../components/Pagination/Pagination";
import { pagination } from "../../features/capsules/capsuleSlice";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const totalLength = useAppSelector((state) => state.capsules.totalLength);
  const [searchParams, setSearchParams] = useSearchParams();

  const paginationHandler = (page) => {
    setCurrentPage(page);
    setSearchParams({ page });
    dispatch(pagination({ page }));

  };
  const capsules = useAppSelector((state) => state?.capsules?.filterdData);
  const data = useAppSelector((state) => state?.capsules?.data);
  useEffect(() => {
    dispatch(fetchCapsules());
  }, []);

  useEffect(() => {
    const page = searchParams.get('page');
    if (page) {
      paginationHandler(Number(page));
    }
  }, [data]);
  return (
    <VStack gap={{ base: "50px", sm: "80px", md: "50px" }}>
      <Banner />
      <Heading variant="sectionTitle" color="brand.primary.300">
        Capsules
      </Heading>
      <DataTable data={capsules} />
      <Pagination
        currentPage={currentPage}
        onPageChange={paginationHandler}
        totalPages={Math.ceil(Number(totalLength) / 6)}
      />
    </VStack>
  );
}
