import Button from "../../../../components/ui/button";
import Input from "../../../../components/ui/input";
import Textarea from "../../../../components/ui/textarea";
import { useAddCategory } from "../../../../hooks/use-categories";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

function CategoryForm({ title, submitText }) {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    mutate(formData);
  };
  const { mutate, isPending } = useAddCategory({
    onSuccess: () => {
      navigate("/categories");
    },
  });

  const labelClass = "grid gap-2 text-[11px] font-extrabold text-[#4c6257]";

  return (
    <section className="max-w-3xl rounded-2xl border border-black/5 bg-white p-6 shadow-[0_10px_34px_rgba(25,50,37,0.05)]">
      <div className="mb-5">
        <p className="text-[10px] font-black uppercase tracking-[0.14em] text-muted">
          Category Form
        </p>

        <h3 className="mt-1 text-xl font-bold text-brand-900">{title}</h3>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <label className={labelClass}>
          Category Name
          <Input name="name" placeholder="Living Room" />
        </label>

        <label className={labelClass}>
          Description
          <Textarea
            name="description"
            rows="5"
            placeholder="Sofas, chairs and living room furniture"
          />
        </label>

        <div>
          <Button type="submit">{submitText}</Button>
        </div>
      </form>
    </section>
  );
}

export default CategoryForm;
