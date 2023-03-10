export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
    },
  },
];
export const userRows = [
  {
    id: 1,
    username: "Jamie Snow",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    status: "active",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 2,
    username: "Jamie Snow",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    status: "active",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 3,
    username: "Jamie Snow",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    status: "passive",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 4,
    username: "Jamie Snow",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    status: "pending",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 5,
    username: "Jamie Snow",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    status: "passive",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 6,
    username: "Jamie Snow",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    status: "active",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 7,
    username: "Jamie Snow",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    status: "pending",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 8,
    username: "Jamie Snow",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    status: "passive",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 9,
    username: "Jamie Snow",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    status: "pending",
    email: "2snow@gmail.com",
    age: 42,
  },
  {
    id: 10,
    username: "Jamie Snow",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    status: "active",
    email: "2snow@gmail.com",
    age: 42,
  },
];
