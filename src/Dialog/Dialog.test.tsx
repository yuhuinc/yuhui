import React from "react";
import faker from "faker";
import { DialogCentreScreen } from "./DialogCentreScreen";
import { renderWithContent } from "../testUtils";

describe("DialogCentreScreen content", () => {
  test("renders English copy", () => {
    const enCopy = "snapshot";
    const content = {
      contentNodes: {
        dialog: {
          copy: {
            en: enCopy,
            fr: faker.lorem.word()
          }
        }
      },
      lang: "en"
    };

    const { container } = renderWithContent(content)(
      <DialogCentreScreen label={enCopy}>
        <p>{enCopy}</p>
      </DialogCentreScreen>
    );

    expect(container).toMatchSnapshot();
  });

  test("renders French copy", () => {
    const frCopy = "snapshot";
    const content = {
      contentNodes: {
        dialog: {
          copy: {
            en: faker.lorem.word(),
            fr: frCopy
          }
        }
      },
      lang: "fr"
    };

    const { container } = renderWithContent(content)(
      <DialogCentreScreen label={frCopy}>
        <p>{frCopy}</p>
      </DialogCentreScreen>
    );

    expect(container).toMatchSnapshot();
  });
});
