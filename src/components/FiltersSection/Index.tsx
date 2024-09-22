"use client";

import React from "react";
import { IoIosSearch } from "react-icons/io";
import styles from "./styles.module.css";
import Select from "@/components/Select";
import { GetMoviesGenresByListResponse } from "@/models/common/GetGenres";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface Props {
  genres: GetMoviesGenresByListResponse["genres"];
}

function FiltersSection({ genres }: Props): React.JSX.Element {
  const genresOptions = genres.map((genre) => {
    return { label: genre.name, value: genre.id };
  });

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlerOnChangeSelect = useDebouncedCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (!value) {
        return;
      }

      if (params.size > 0) {
        params.keys().forEach((key) => {
          params.delete(key);
        });
      }

      params.set(key, value);

      replace(`${pathname}?${params.toString()}`);
    },
    500,
  );

  return (
    <div className={styles.filtersContainer}>
      <label htmlFor="searchInput" className={styles.searchInputContainer}>
        <span className={styles.title}>Search</span>
        <div className={styles.searchBox}>
          <input
            id="searchInput"
            type="text"
            placeholder="Keywords"
            name="search"
            className={styles.searchInput}
            onChange={(e) => handlerOnChangeSelect("query", e.target.value)}
            defaultValue={searchParams.get("query")?.toString()}
          />
          <button className={styles.searchButton}>
            <IoIosSearch />
          </button>
        </div>
      </label>

      <Select
        name="genres"
        placeholder="______________________________________________"
        options={genresOptions}
        onChange={(e) => handlerOnChangeSelect("genre", e.target.value)}
        value={searchParams.get("genre")?.toString()}
      />
    </div>
  );
}

export default FiltersSection;
