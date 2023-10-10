const DataOnboarding = [
    {
      id: 1,
      img: require('../../assets/animations/screen1.json'),
      title: 'Welcome to the Book Management App!',
      color:  "#60B7FF",
      describe: ''
    },
    {
        id: 2,
        img: require('../../assets/animations/screen2.json'),
        title: "Let's explore .",
        describe: "Let's explore how our app can help you manage all your favorite books."
      },
      {
        id: 3,
        img: require('../../assets/animations/screen3.json'),
        title: "Add New Books",
        describe: "Get started by adding new books to your library. You can manually enter book details or scan the barcode."
      },
      {
        id: 4,
        img: require('../../assets/animations/screen4.json'),
        title: "Library Management",
        describe: "Easily sort, search, and filter your books. Organize them by title, author, or genre."
      },
      {
        id: 5,
        img: require('../../assets/animations/screen5.json'),
        title: "Smart Recommendations",
        describe: "The app will suggest books based on your preferences. "
      },
      {
        id: 6,
        img: require('../../assets/animations/screen6.json'),
        title: "Rate and Review",
        describe: "After reading a book, you can rate and write a review to share with the community."
      },
      {
        id: 7,
        img: require('../../assets/animations/screen_end.json'),
        title: "Start now and enjoy the best book management experience!",
            describe: ''
      },
  ];

  const DataBoook = [
    {
      id: 1,
      url: require('../../assets/images/imgBooks/image1.png'),
      title: 'Đắc Nhân Tâm',
      author: 'Jony width'
    },
    {
      id: 2,
      url: require('../../assets/images/imgBooks/image2.png'),
      title: 'Tuổi trẻ hoang dại',
      author: 'Jony width'
    },
    {
      id: 3, 
      url: require('../../assets/images/imgBooks/image3.png'),
      title: 'Thật đó nhỉ',
      author: 'Jony width'
    },
    {
      id: 4, 
      url: require('../../assets/images/imgBooks/image1.png'),
      title: 'Another Book',
      author: 'Another Author'
    },
    {
      id: 5, 
      url: require('../../assets/images/imgBooks/image1.png'),
      title: 'Another Book',
      author: 'Another Author'
    },
    {
      id: 6,
      url: require('../../assets/images/imgBooks/image1.png'),
      title: 'Đắc Nhân Tâm',
      author: 'Jony width'
    },
    {
      id: 7,
      url: require('../../assets/images/imgBooks/image2.png'),
      title: 'Tuổi trẻ hoang dại',
      author: 'Jony width'
    },
    {
      id: 8, 
      url: require('../../assets/images/imgBooks/image3.png'),
      title: 'Thật đó nhỉ',
      author: 'Jony width'
    },
    {
      id: 9, 
      url: require('../../assets/images/imgBooks/image1.png'),
      title: 'Another Book',
      author: 'Another Author'
    },
    {
      id: 10, 
      url: require('../../assets/images/imgBooks/image1.png'),
      title: 'Another Book',
      author: 'Another Author'
    }
    
  ];
  
  const DataOrder1 = [
    {
      id: 1,
      id_user: 'PCD112',
      curentDate: '24-10-2003',
      books: [
        {
          url: require('../../assets/images/imgBooks/image1.png'),
          title: 'Đắc Nhân Tâm',
        }
      ],
    },
    {
      id: 2,
      id_user: 'PCD113',
      curentDate: '25-10-2003',
      books: [
        {
          url: require('../../assets/images/imgBooks/image2.png'),
          title: 'Sách 2',
        }
      ],
    },
    {
      id: 3,
      id_user: 'PCD114',
      curentDate: '26-10-2003',
      books: [
        {
          url: require('../../assets/images/imgBooks/image3.png'),
          title: 'Sách 3',
        }
      ],
    },
  ];


  const DataOrder = [
    {
      id: 101,
      deail: [
        {
          url: require('../../assets/images/imgBooks/image3.png'),
          title: 'Sách 3',
          date: '20/10/2021',
          count: 94,
          status: 'soudout',
        },
        {
          url: require('../../assets/images/imgBooks/image3.png'),
          title: 'Sách 3',
          date: '20/10/2021',
          count: 94,
          status: 'soudout',
        },
      ],
    },
    {
      id: 102, // Giá trị id mới cho phần tử thứ 2
      deail: [
        {
          url: require('../../assets/images/imgBooks/image2.png'), // Url mới cho phần tử thứ 2
          title: 'Sách 4', // Title mới cho phần tử thứ 2
          date: '21/10/2021', // Ngày mới cho phần tử thứ 2
          count: 75, // Số lượng mới cho phần tử thứ 2
          status: 'available', // Trạng thái mới cho phần tử thứ 2
        },
      ],
    },
    {
      id: 103, // Giá trị id mới cho phần tử thứ 3
      deail: [
        {
          url: require('../../assets/images/imgBooks/image1.png'), // Url mới cho phần tử thứ 3
          title: 'Sách 5', // Title mới cho phần tử thứ 3
          date: '22/10/2021', // Ngày mới cho phần tử thứ 3
          count: 60, // Số lượng mới cho phần tử thứ 3
          status: 'available', // Trạng thái mới cho phần tử thứ 3
        },
      ],
    },
    {
      id: 104, // Giá trị id mới cho phần tử thứ 4
      deail: [
        {
          url: require('../../assets/images/imgBooks/image2.png'), // Url mới cho phần tử thứ 4
          title: 'Sách 6', // Title mới cho phần tử thứ 4
          date: '23/10/2021', // Ngày mới cho phần tử thứ 4
          count: 80, // Số lượng mới cho phần tử thứ 4
          status: 'available', // Trạng thái mới cho phần tử thứ 4
        },
      ],
    },
    {
      id: 105, // Giá trị id mới cho phần tử thứ 5
      deail: [
        {
          url: require('../../assets/images/imgBooks/image1.png'), // Url mới cho phần tử thứ 5
          title: 'Sách 7', 
          date: '24/10/2021', // Ngày mới cho phần tử thứ 5
          count: 70, // Số lượng mới cho phần tử thứ 5
          status: 'available', // Trạng thái mới cho phần tử thứ 5
        },
      ],
    },
  ];
  
  // Giờ bạn có một mảng DataOrder với 5 phần tử
  
  
  export  {DataBoook,DataOnboarding,DataOrder1,DataOrder} ;
  