import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

// import xlsFile from "file_example_XLS_10.xls";

const ExcelViewer = () => {
  const docs = [{ uri: require("file_example_XLS_10.xls") }];
  return (
    <div>
      <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
    </div>
  );
};
export default ExcelViewer;
