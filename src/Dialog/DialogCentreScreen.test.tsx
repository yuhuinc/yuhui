import React from "react";
import faker from "faker";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, queryByTestId } from "@testing-library/react";
import { renderWithContent } from "../testUtils";
import { useDialog, DialogCentreScreen, P } from "../";

const DialogContainer = () => {
  const dialog = useDialog();
  return (
    <div>
      <button data-testid="button" onClick={dialog.toggle}>
        toggle
      </button>
      <DialogCentreScreen label="label" {...dialog}>
        <P data-testid="p" contentKey="p" />
        <button>does nothing</button>
      </DialogCentreScreen>
    </div>
  );
};

describe("content", () => {
  const copy = faker.lorem.sentence();
  const contentNodes = {
    p: {
      copy: {
        en: copy,
        fr: copy
      }
    }
  };

  test("renders button but not children", () => {
    const { container } = renderWithContent({
      contentNodes,
      lang: "en"
    })(<DialogContainer />);

    expect(queryByTestId(container, "button")).toBeInTheDocument();
    expect(queryByTestId(container, "p")).toBeNull();
  });
});

describe("events", () => {
  const copy = faker.lorem.sentence();
  const contentNodes = {
    p: {
      copy: {
        en: copy,
        fr: copy
      }
    }
  };

  test("renders children when button is clicked", async () => {
    const { getByText } = renderWithContent({
      contentNodes,
      lang: "en"
    })(<DialogContainer />);
    expect(getByText(copy).parentElement.className).toContain("hidden");

    fireEvent.click(getByText("toggle"));

    expect(getByText(copy).parentElement.className).not.toContain("hidden");
  });
});
