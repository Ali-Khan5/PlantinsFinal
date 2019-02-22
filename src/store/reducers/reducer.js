const initial = {
  name: "ali",
  currentUser: "",
  News: "",
  MOVIES:"",
  latestComment:'',
  NewsLatestComment:''
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.Payload };

    case "ALL_USER":
      return { ...state, allUsers: action.payload };

    case "CURRENT_USER":
      return { ...state, currentUser: action.payload };

    case "ALL_MSG":
      return { ...state, AllMessages: action.payload };
    case "MOVIES":
      return { ...state, MOVIES: action.payload };
  
    case "GET_NEWS":
      return { ...state, News: action.payload };
      case "SIGNOUT_USER":
      return { ...state,currentUser: action.payload };
      case  'Latest_Comment':
      let newComments=''
      newComments=action.payload;
      return {...state,latestComment:newComments}
      case  'Latest_Comment_News':
      let newCommentsNews=''
      newCommentsNews=action.payload;
      return {...state,NewsLatestComment:newCommentsNews}
      case "Empty_comments":
      return {...state,latestComment:action.payload}
    default:
      return state;
  }
};

export default reducer;
