import React from "react";
import {
  Container,
  Typography,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";
import { useUser } from "./hooks/useUser";
import UserCard from "./components/UserCard";

const App: React.FC = () => {
  const { users, loading, fetchUser } = useUser();

  return (
    <Container sx={{ py: 5 }}>
      <Typography
        variant="h3"
        textAlign="center"
        mb={4}
        fontWeight="bold"
        color="#fff"
      >
        User Information
      </Typography>

      <Box textAlign="center" mb={5}>
        <Button
          variant="contained"
          color="primary"
          onClick={fetchUser}
          sx={{ fontWeight: "bold", px: 4, py: 1.5 }}
        >
          Refresh
        </Button>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={5}>
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <Box display="flex" justifyContent="center">
          {users?.map((user, index) => (
            <UserCard key={index} user={user} loading={loading} />
          ))}
        </Box>
      )}
    </Container>
  );
};

export default App;
