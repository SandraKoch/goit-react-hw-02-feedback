import FeedbackComponent from './Feedback';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: 'white',
        backgroundColor: 'black',
        backgroundSize: 'cover',
        listStyle: 'none',
        backgroundImage: `linear-gradient(
          to bottom,
          rgba(47, 48, 58, 0.4) 0%,
          rgba(47, 48, 58, 0.4) 50%
        ), url("https://img.freepik.com/free-photo/coffee-beans-with-props-making-coffee_1220-4536.jpg?w=1060&t=st=1689365325~exp=1689365925~hmac=abb2e77ae526b6358a1a95533c279c4e8616d91b88a26b18c71b121817db94f2")`,
      }}
    >
      <FeedbackComponent />
    </div>
  );
};
