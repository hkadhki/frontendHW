import { Box, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function MenuItem({ to, children }) {
    return (
        <Box>
            <Link
                as={NavLink}
                to={to}
                fontSize="16px"
                fontWeight="medium"
                textDecoration="none"
                color="gray.700"
                _hover={{ textDecoration: "none" }}
                sx={{
                    "&.active": {
                        color: "#4A61DD",
                        fontWeight: "bold"
                    }
                }}
            >
                {children}
            </Link>
        </Box>
    );
}