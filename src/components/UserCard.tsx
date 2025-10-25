import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import type { DisplayUser } from "../types";

interface Props {
  user: DisplayUser | null;
  loading: boolean;
  onRefresh: () => void;
}

const UserCard: React.FC<Props> = ({ user, loading, onRefresh }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="30vh"
    >
      <Card
        sx={{
          maxWidth: 600,
          maxHeight: 600,
          textAlign: "center",
          p: 3,
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        {loading ? (
          <CircularProgress size={60} />
        ) : user ? (
          <CardContent>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ fontSize: "2rem" }}
            >
              Full Name: {user.fullName}
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              gutterBottom
              sx={{ fontSize: "1.4rem" }}
            >
              Email: {user.email}
            </Typography>
            {/* <Typography
              variant="h4"
              color="text.secondary"
              gutterBottom
              sx={{ fontSize: "1.4rem" }}
            >
              Location: {user.location}
            </Typography> */}

            <Button
              variant="contained"
              color="primary"
              startIcon={<RefreshIcon />}
              onClick={onRefresh}
              sx={{ mt: 3, borderRadius: 2, fontSize: "1.2rem", py: 1.5 }}
            >
              Refresh User
            </Button>
          </CardContent>
        ) : (
          <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
            No user data available.
          </Typography>
        )}
      </Card>
    </Box>
  );
};

export default UserCard;
