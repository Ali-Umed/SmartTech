/* eslint-disable react/prop-types */
export default function Heading({ heading }) {
  return (
    <div className="text-center">
      <div>
        <h4 className="text-3xl font-extrabold mb-2 mt-4">{heading}</h4>
      </div>
    </div>
  );
}
