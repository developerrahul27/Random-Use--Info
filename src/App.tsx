import React from "react";
import { Container, Typography } from "@mui/material";
import { useUser } from "./hooks/useUser";
import UserCard from "./components/UserCard";

const App: React.FC = () => {
  const { user, loading, fetchUser } = useUser();

  return (
    <Container>
      <Typography
        variant="h3"
        textAlign="center"
        mt={5}
        mb={2}
        fontWeight="bold"
      >
        Random User Information
      </Typography>
      <UserCard user={user} loading={loading} onRefresh={fetchUser} />
    </Container>
  );
};

export default App;
