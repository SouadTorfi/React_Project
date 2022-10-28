import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React from "react";
import "./pagination.css";

export default function pagination(props) {

  return (
    <div className="Pagination">
      <Stack spacing={2}>
        <Pagination
          count={props.count ? props.count : 1}
          color="primary"
          onChange={(_, page) => {
            props.getproductsByPagination(page);
          }}
        />
      </Stack>
    </div>
  );
}