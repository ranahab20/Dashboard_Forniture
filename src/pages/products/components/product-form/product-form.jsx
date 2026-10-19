import Button from "../../../../components/ui/button";
import Input from "../../../../components/ui/input";
import Select from "../../../../components/ui/select";
import Textarea from "../../../../components/ui/textarea";

function ProductForm({
  title,
  submitText,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const labelClass =
    "grid gap-2 text-[11px] font-extrabold text-[#4c6257]";

  return (
    <section className="max-w-3xl rounded-2xl border border-black/5 bg-white p-6 shadow-[0_10px_34px_rgba(25,50,37,0.05)]">
      <div className="mb-5">
        <p className="text-[10px] font-black uppercase tracking-[0.14em] text-muted">
          Product Form
        </p>

        <h3 className="mt-1 text-xl font-bold text-brand-900">
          {title}
        </h3>
      </div>

      <form
        className="grid grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        <label className={labelClass}>
          Product Name

          <Input
            name="name"
            placeholder="Stylish Soft Chair"
          />
        </label>

        <label className={labelClass}>
          Price

          <Input
            name="price"
            type="number"
            min="0"
            step="0.01"
            placeholder="20"
          />
        </label>

        <label className={labelClass}>
          Category

          <Select
            name="categoryId"
            defaultValue=""
          >
            <option
              value=""
              disabled
            >
              Select category
            </option>
          </Select>
        </label>

        <label className={labelClass}>
          Image URL

          <Input
            name="imageUrl"
            placeholder="https://..."
          />
        </label>

        <label className={`${labelClass} col-span-2`}>
          Description

          <Textarea
            name="description"
            rows="5"
            placeholder="Product description..."
          />
        </label>

        <div className="col-span-2">
          <Button type="submit">
            {submitText}
          </Button>
        </div>
      </form>
    </section>
  );
}

export default ProductForm;
