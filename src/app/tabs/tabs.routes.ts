import { Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

export const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "concepts",
        loadComponent: () =>
          import("../concepts/concepts.page").then((m) => m.ConceptsPage),
      },
      {
        path: "",
        redirectTo: "/tabs/concepts",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/concepts",
    pathMatch: "full",
  },
];
