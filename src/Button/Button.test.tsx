import React from "react";
import faker from "faker";
import { fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import { renderWithContent } from "../testUtils";

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

    const { container } = renderWithContent({
      contentNodes,
      lang: "en"
    })(<Button contentKey="button" />);

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

    const { container } = renderWithContent({
      contentNodes,
      lang: "fr"
    })(<Button contentKey="button" />);

    expect(container).toMatchSnapshot();
  });
});

describe("events", () => {
  test("calls onClick callback when click event is fired", async () => {
    const handleClick = jest.fn(() => {});

    const { getByTestId } = renderWithContent({})(
      <Button data-testid="button" onClick={handleClick} contentKey="hello" />
    );

    fireEvent.click(getByTestId("button"));

    expect(handleClick.mock.calls.length).toBe(1);
  });
});
