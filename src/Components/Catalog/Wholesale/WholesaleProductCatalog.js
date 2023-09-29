
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Modal from "react-modal";
import xx from "../../../assets/img/xx.svg";
import ClipLoader from "react-spinners/ClipLoader";
import CategoryFilter from "../Retail/Filters/FilterOptions/CategoryFilter";
import SortFilter from "../Retail/Filters/FilterOptions/SortFilter";
import WholesaleFilters from "./WholesaleFilters/WholesaleFilters";
import WholesaleProducts from "./WholesaleProducts";

const ProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const [filterOptions, setFilterOptions] = useState({});
    const [selectedFilters, setSelectedFilters] = useState({});
    const [selectedSort, setSelectedSort] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        fetchProducts();
    }, [selectedFilters, selectedSort]);

    const fetchProducts = async () => {
        setIsLoading(true); // начало загрузки
        try {
            const params = {...selectedFilters};
            if (selectedSort) {
                params.sort_by = selectedSort.field;
                params.order = selectedSort.order;
            }
            const response = await axios.get('/products-wholesale', {params});

            setProducts(response.data.products);

            const allPrices = new Set();
            response.data.products.forEach(product => {
                allPrices.add(product.retail_price);
                allPrices.add(product.wholesale_price);
            });

            const uniquePrices = Array.from(allPrices).sort((a, b) => a - b);
            setFilterOptions({
                ...response.data.filterOptions, prices: uniquePrices
            });
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setIsLoading(false); // окончание загрузки
        }
    };

    const handleFilterChange = (filterName, value) => {
        setSelectedFilters(prevFilters => ({
            ...prevFilters, [filterName]: value
        }));
    };

    const handleResetFilters = () => {
        setSelectedFilters({});
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Функции для открытия и закрытия модального окна
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (<>


        <div className="container">
            <div className="catalog__title">Аккумуляторы для автомобилей по оптовым ценам</div>

        </div>
        <div className="container-catalog">

            <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
                <div onClick={closeModal} className='closeFiltersModal'>
                    <img src={xx} alt=""/>
                </div>
                <WholesaleFilters
                    filterOptions={filterOptions}
                    selectedFilters={selectedFilters}
                    onFilterChange={handleFilterChange}
                    onResetFilters={handleResetFilters}
                    selectedSort={selectedSort}
                    onSortChange={setSelectedSort}
                />
            </Modal>
            <WholesaleFilters
                filterOptions={filterOptions}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
                selectedSort={selectedSort}
                onSortChange={setSelectedSort}
                isMobile='filterPc'
            />
            <div className="prcont">

                <CategoryFilter
                    options={filterOptions.categories}
                    selectedValue={selectedFilters.category_id}
                    onFilterChange={handleFilterChange}
                    classname="categor"

                    // options_retail_price={options_retail_price}
                />
                <div className="filt">
                    <button className="mobile-filter-button" onClick={openModal}>
                        Фильтры
                    </button>
                    <SortFilter selectedSort={selectedSort} onSortChange={setSelectedSort}/>
                </div>
                {isLoading ? (
                    <ClipLoader color={"#bc9412"} size={50} />
                ) : (
                    <WholesaleProducts products={products}/>
                )}
            </div>
        </div>


    </>);
};

export default ProductCatalog;
