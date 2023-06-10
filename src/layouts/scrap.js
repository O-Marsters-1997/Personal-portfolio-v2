Decalring elements
      const variantsArr = document.querySelectorAll('[class*="slot"]');
      const variantsMap = Array.from(variantsArr).reduce((obj, element) => {
        const className = element.className.replace("slot__", "");
        obj[className] = element;
        return obj;
      }, {});
      const testQueries = [
        {
          query: "(min-width: 768px)",
          layout: "desktop",
        },
        {
          query: "(min-width: 500px)",
          layout: "tablet",
        },
      ];
      const enabledViewports = this.dataset.viewports.split(", ");
      let selectedQuery = testQueries.find((mq) => {
        if (enabledViewports.includes(mq.layout)) {
          return window.matchMedia(mq.query).matches;
        }
      });
      const selectedLayout = selectedQuery ? selectedQuery.layout : "mobile";
      const getSelectedQuery = () => {
        const mySelectedQuery = testQueries.find((mq) => {
          if (enabledViewports.includes(mq.layout)) {
            return window.matchMedia(mq.query).matches;
          }
        });
        const selectedLayout = selectedQuery
          ? selectedQuery.layout
          : "mobile";
        // console.log(selectedLayout);
        return { mySelectedQuery, selectedLayout };
      };
      getSelectedQuery();
      // const { mySelectedQuery } = getSelectedQuery();
      // console.log(mySelectedQuery);
      // Defining media query
      // const mediaQuery = window.matchMedia("(min-width: 768px)");
      const checkViewportSize = () => {
        // const selectedEl = query.matches
        //   ? variantsMap["desktop"]
        //   : variantsMap["mobile"];
        // variantsArr.forEach((variant) => {
        //   variant.style.display = variant == selectedEl ? "block" : "none";
        // });
        variantsArr.forEach((variant) => {
          if (variant.className.includes(selectedLayout)) {
            variant.style.display = "block";
          } else {
            variant.style.display = "none";
          }
        });
      };
      // First check on page load
      checkViewportSize();
      // // if not then there will only be one layout
      // if (variantsArr.length > 1) {
      //   // Subsequent checks fire on an onchange event listener
      // mediaQuery.addEventListener("change", (event) => {
      //   checkViewportSize(event.target);
      // });
      // }
      window.addEventListener("resize", () => {
        const mmobileQuery = "(min-width: 0px)";
        const { mySelectedQuery } = getSelectedQuery();
        const query = window.matchMedia(
          mySelectedQuery?.query ?? mmobileQuery
        );
      });
