import React from "react";
import "./table.scss";
// import * as React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    img: "data:image/jpeg;base64,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", 
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
  {
    id: 2342356,
    product: "ASUS ROG Strix",
    img: "data:image/jpeg;base64,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",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Approved",
  },
  {
    id: 2342357,
    product: "ASUS ROG Strix",
    img: "data:image/jpeg;base64,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",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
  {
    id: 2342358,
    product: "ASUS ROG Strix",
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAEAAMFBgECBwj/xAA+EAABAwICBQkFBQgDAAAAAAABAAIDBBEFIQYSMUFhBxMUIjJRcYGxM3KRocEjUmKC4UKSk6Ky0vDxFTRE/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAIREBAAICAQMFAAAAAAAAAAAAAAECAxEEBRIhMTJRUqH/2gAMAwEAAhEDEQA/AO4pKhO0lxWXZLHH7kY+t027FMRl7dbN+V2r6IOgoeWtpYfa1MLPekAVAe6SX2sj3+84n1WmoBsCC7y4/hcXaq2H3AXegQM+mGGxdhlRJ7rAPUhVJ7UNI1BZKnTxrPYYc5/F8ur6AqIrOUDFP/PS0kfvBzj6hQszdqj6gKQbXacaRyX1K8QjuihZ9QSq9iGkWO1JPPYxX+DKhzB8GkBZqBtUbOEF05HYays0nra+WpqHxU1Lzbtd5Ie6R1xfvsGE/mC7KqTyR4Z0HRGOqe0CXEJXVLj+E9Vn8rWnzV2UDl8YT7QmGkA2Cea5SHbLBWutktXPTY1kQspTskg71G1laGlzIgHPGTi42azxPfwGfqi0UtJTFR9SC3tAjxC3dO+Fhlme+2XXcNX91oz+OaarJgRYNA3k77+KNLYorXco6oO1AspJMQq4KGC/O1MrYWkbtY2v5bfJFTuRGieK4Xg+ksGIYy97Yadj3RhkZeTIRqjIcC5GLvlJTx0lLDTQN1YoY2xsHcALBPKgu5XNGG9npz/Cnt6kJs8sGjYP/XxL+Cz+9QIkSDIgg+CcbKomOo47U62fipEnzq0dLkgef4rR0/FBvXww1cL4pQbP1dYg2JsbjNDFnNOJYWn7ocOyO4W2Dy8Unz8ULLPxRpGW0Ro29r3S87UvDnN7DWjqs48Tx+AGdx55NqzLNxQUsqKTMy0mftVexGXXqCL9kf59FLzygAknIbVWXSue8yOBBf1h4Ig+CjKHCMSxOIz0UGtEHamsXAXI/wBoSip5K2pipoQdeR1rgbBvK9A6LaJQ0uCwRSN1SBkFC9Yj1lzOOqBFw6/ciI6nddVsVEhvYC37I+qeZVzBt3MBGsBYHOylRYek8Vq6o4qK6RxWOkcUEi+fih5JuKDdPxTTpuKAiSXihpJE0+VMPkQM4nUNipnF2et1QDv7/koRhLnFzjfeSicZlLpo4h+yNY+J/S3xU3oNo/JjWKxxBl4muBkPHuUJ340vXJHoiZXf8nWRnrWLWuHZG4fVdna0NaABYBC4TQR4dRR08QADRmjEQ8jczOzszSDzWRLWM2TE+IUpNh2MwPtJQBzfvNOaj5atsU/MVED45LXsUBVFLV1FooYuemDS5/WDd+5EOFdH7TD6ge7Z3ohqCvp6erjm6wDTnlu3qzsxfD5co6ltzsBW+Olbx5l6XC4mDkUnvtqYVp9ZqZSxTxn8cRCb6fA7ZK3zyVxbLSviJ51r5ScgH5AeCFq6WN5u8Rvba56gPlmFacHxLpt0f63/ABWOkMd2XtPgVhrtZwF8lJT4dSPcbUsTRbOzbH5KHxOnp6X2OtG625x3rK2OYcmTp2Skb3EwChhlrq/7JutJNJqxi3z8gvRnJroxHguFRyPb9q4XudvElUHkn0U6bVNxGoi+zaOpf7v6ruLGhjA1osALALN57ZJJJAJNhtFN7Snjd5Ks49yfYTizw/mY2OAtm0FXFJByGv5HoXG9O4AjMariLLUcj8b6ZofbnBv1zddgSQcJq+SbEICTTTzgdzXAhQ8+hOkdCerK547nNLfmLr0csFrSLEAqdzC9cl6e2dPMU9FpBT3EtMXj8L7/ANS0wfR7EMcxyKOenkZAXAnXtnwyXpiWgpJvaU8bvFqbpsKoaWTnKemYx/eApm8zDovzct69sybwLDIsKw+OnjaAQOtbvUikkquQkkkkH//Z",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Approved",
  },
  {
    id: 2342359,
    product: "ASUS ROG Strix",
    img: "data:image/jpeg;base64,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",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Approved",
  },
];

export const List = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
