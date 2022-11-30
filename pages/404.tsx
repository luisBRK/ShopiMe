import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ShopLayout } from "../components/layouts";

const ErrorPage404: FC = () => {
  return (
    <ShopLayout title={"Page not found"} pageDescription={"No hay nada que mostrar aquí"}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"calc(100vh - 200px)"}
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Typography variant='h1' component={"h1"} fontSize={60} fontWeight={300}>
          404 |
        </Typography>

        <Typography marginLeft={2}>No se encontró la pagina que deseas</Typography>
      </Box>
    </ShopLayout>
  );
};
export default ErrorPage404;
