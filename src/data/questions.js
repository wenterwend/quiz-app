import {
  MultipleChoiceSingle,
  TrueFalse,
  FillInTheBlank,
  Matching,
  Ordering,
} from "../components/Questions";

const questions = [
  new MultipleChoiceSingle(1, "What is 2 + 2?", ["3", "4", "5"], 1),
  new TrueFalse(2, "The Earth is flat.", false),
  new FillInTheBlank(3, "The capital of France is ___", "Paris"),
  new Matching(4, "Match the terms to their definitions", [
    { left: "HTTP", right: "Protocol" },
    { left: "HTML", right: "Markup Language" },
  ]),
  new Ordering(5, "Arrange the steps of the water cycle", [
    "Evaporation",
    "Condensation",
    "Precipitation",
    "Collection",
  ]),
];

export default questions;