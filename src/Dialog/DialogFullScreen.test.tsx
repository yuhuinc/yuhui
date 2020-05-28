import React from "react";
import faker from "faker";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent } from "@testing-library/react";
import { renderWithContent } from "../testUtils";
import { useDialog, DialogFullScreen, P } from "../";

const DialogContainer = ({ visible = false, ...rest }) => {
  const dialog = useDialog({ visible });
  return (
    <div>
      <button data-testid="button" onClick={dialog.toggle}>
        toggle
      </button>
      <DialogFullScreen label="dialog" {...dialog} {...rest}>
        <P data-testid="p" contentKey="p" />
        <button data-testid="focus">does nothing</button>
      </DialogFullScreen>
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
    const { queryByTestId } = renderWithContent({
      contentNodes,
      lang: "en"
    })(<DialogContainer />);

    expect(queryByTestId("button")).toBeInTheDocument();
    expect(queryByTestId("p")).toBeNull();
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

  test("renders children when button is clicked and puts focus on next focusable item in it", () => {
    const { getByText, queryByTestId, getByLabelText } = renderWithContent({
      contentNodes,
      lang: "en"
    })(<DialogContainer />);
    expect(getByLabelText("dialog")).not.toBeVisible();

    fireEvent.click(getByText("toggle"));

    expect(getByText(copy)).toBeVisible();
    expect(queryByTestId("focus")).toHaveFocus();
  });

  test("when hideOnEsc is true, hides children on esc", () => {
    const { getByLabelText } = renderWithContent({
      contentNodes,
      lang: "en"
    })(<DialogContainer hideOnEsc={true} visible={true} />);
    expect(getByLabelText("dialog")).toBeVisible();

    fireEvent.keyDown(getByLabelText("dialog"), {
      key: "Escape",
      code: "Escape"
    });

    expect(getByLabelText("dialog")).not.toBeVisible();
  });

  test("when hideOnEsc is false, does not hide children on esc", () => {
    const { getByLabelText } = renderWithContent({
      contentNodes,
      lang: "en"
    })(<DialogContainer hideOnEsc={false} visible={true} />);
    expect(getByLabelText("dialog")).toBeVisible();

    fireEvent.keyDown(getByLabelText("dialog"), {
      key: "Escape",
      code: "Escape"
    });

    expect(getByLabelText("dialog")).toBeVisible();
  });

  test("when onEscButtonClick is given, it gets fired when close button is clicked", () => {
    const handleClick = jest.fn(() => true);

    const { getByLabelText, getByText } = renderWithContent({
      contentNodes,
      lang: "en"
    })(
      <DialogContainer
        hideOnEsc={false}
        visible={true}
        onEscButtonClick={handleClick}
      />
    );
    expect(getByLabelText("dialog")).toBeVisible();

    fireEvent.click(getByText("esc"));

    expect(handleClick.mock.calls.length).toBe(1);
    expect(getByLabelText("dialog")).not.toBeVisible();
  });

  test("when onEscButtonClick returns false, it prevents dialog from closing", () => {
    const handleClick = jest.fn(() => false);

    const { getByLabelText, getByText } = renderWithContent({
      contentNodes,
      lang: "en"
    })(
      <DialogContainer
        hideOnEsc={false}
        visible={true}
        onEscButtonClick={handleClick}
      />
    );
    expect(getByLabelText("dialog")).toBeVisible();

    fireEvent.click(getByText("esc"));

    expect(handleClick.mock.calls.length).toBe(1);
    expect(getByLabelText("dialog")).toBeVisible();
  });
});
