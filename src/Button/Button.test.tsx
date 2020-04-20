import React from "react";
import faker from "faker";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import { ContentProvider } from "../Content/Content";

const TestButton = ({
  contentNodes = {},
  theme = {},
  lang = "en",
  contentKey,
  ...rest
}) => {
  const defaultContentNodes = {};

  const defaultTheme = {
    colors: {
      primary: {
        light: "#d0dbfd",
        dark: "#230cc2"
      }
    }
  };

  return (
    <ContentProvider
      content={{
        theme: { ...defaultTheme, ...theme },
        contentNodes: { ...defaultContentNodes, ...contentNodes }
      }}
      lang={lang}
    >
      <Button contentKey={contentKey} {...rest} />
    </ContentProvider>
  );
};

describe("content", () => {
  test("renders English copy", () => {
    const enCopy = "snapshot";
    const contentNodes = {
      button: {
        copy: {
          en: enCopy,
          fr: faker.lorem.word()
        }
      }
    };
    const { container } = render(
      <TestButton lang="en" contentNodes={contentNodes} contentKey="button" />
    );

    expect(container).toMatchSnapshot();
  });

  test("renders French copy", () => {
    const frCopy = "snapshot";
    const contentNodes = {
      button: {
        copy: {
          en: faker.lorem.word(),
          fr: frCopy
        }
      }
    };
    const { container } = render(
      <TestButton lang="fr" contentNodes={contentNodes} contentKey="button" />
    );

    expect(container).toMatchSnapshot();
  });
});

describe("events", () => {
  test("calls onClick callback when click event is fired", async () => {
    const handleClick = jest.fn(() => {});
    const { getByTestId } = render(
      <TestButton
        data-testid="button"
        onClick={handleClick}
        contentKey="hello"
      />
    );

    fireEvent.click(getByTestId("button"));

    expect(handleClick.mock.calls.length).toBe(1);
  });
});
