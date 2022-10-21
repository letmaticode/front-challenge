import React from "react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewport: {
        viewports: MINIMAL_VIEWPORTS,
        defaultViewport: "mobile2",
    },
};