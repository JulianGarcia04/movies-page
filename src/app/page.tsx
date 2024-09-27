import FiltersSection from "@/components/FiltersSection/Index";
import DefaultMoviesSection from "@/components/DefaultMoviesSection/Index";

import { GetMoviesGenresByListResponseSchema } from "@/models/common/GetGenres";
import CustomMoviesSection from "@/components/CustomMoviesSection/Index";
import { GetCustomMoviesResponse } from "@/models/common/SearchMovies";
import { FilterQueries, FilterList } from "@/utils/FilterQueries";
import { validateSingleProperty } from "@/utils";
import { tmdb_api } from "@/utils/axios";

interface Props {
  searchParams?: {
    [key in FilterQueries]?: string;
  };
}

export default async function Home({
  searchParams,
}: Props): Promise<JSX.Element> {
  const { genres } = await tmdb_api.get("genre/movie/lis").then((res) => {
    return GetMoviesGenresByListResponseSchema.parse(res.data);
  });

  const customParams: Record<FilterQueries, Record<string, unknown>> = {
    genre: {
      with_genres: Number(searchParams?.genre),
    },
    query: {
      query: searchParams?.query,
      year: !Number.isNaN(Number(searchParams?.query))
        ? searchParams?.query
        : undefined,
    },
  };

  // check if only exist one filter, can't exists two or more filters
  const filter = validateSingleProperty({ ...searchParams });

  // get custom params for the function
  const customParam = !filter ? undefined : customParams[filter.key];

  // and get movie fn
  const getMovieFn =
    !filter || !customParam
      ? undefined
      : (): Promise<GetCustomMoviesResponse> =>
          FilterList[filter.key](1, customParam);

  const customMovies = getMovieFn ? await getMovieFn() : undefined;

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      <FiltersSection genres={genres} />
      {customMovies?.results && customParam && filter ? (
        <CustomMoviesSection
          customMovies={customMovies.results}
          filter={{ key: filter.key, value: filter.value ?? "", customParam }}
          totalPage={customMovies.total_pages}
        />
      ) : (
        <DefaultMoviesSection />
      )}
    </div>
  );
}
