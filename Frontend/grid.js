/*
const productListStyles = makeStyles(() => ({
    list: {
        flexGrow: 1
    },
}))


const styles = productListStyles()


return (
            <div className={styles.list} >
                <Grid container spacing={1}>
                    {productKeys.map((id, index) => {
                        <Grid item key={id} xs={12} sm={6} md={3}>
                            <Product
                                id={id}
                                product={products[index]}
                                number={index + 1}
                                handleRemove={handleRemove}
                            />
                        </Grid>
                    })}
                </Grid>
            </div >
        )
*/


/*
return (
            <div className="card text-center w-50 p-1 m-5">
                <div className="card-body">
                    <h2 className="card-title">Product {number}</h2>
                    <ul className="center list-group-flush align-items-stretch">
                        <ProductInfo info="Name" value={product.name} />
                        <ProductInfo info="Description" value={product.description} />
                        <ProductInfo info="Qty. Available" value={product.quantity} />
                    </ul>
                </div>
                <button className="btn btn-primary center w-30" value={id} onClick={(event) => handleRemove(event, id)}>Remove</button>
            </div>
        )
*/


/*
return (
            <Container className={styles.cardGrid} maxWidth="md">
                <Card elevation={3}>
                    <CardContent>
                        <Typography variant="h4" align="center"> <b>Product {number}</b> </Typography>

                        <Box p={4}>
                            <Typography variant="h6">
                                <ProductInfo info="Name" value={product.name} />
                            </Typography>

                            <Typography variant="h6" paragraph={true}>
                                <ProductInfo info="Description" value={product.description} />
                            </Typography>

                            <Typography variant="h6" gutterBottom={true}>
                                <ProductInfo info="Qty. Available" value={product.quantity} />
                            </Typography>
                        </Box>

                        <CardActions align="center">
                            <Button className={styles.button} variant="contained" color="primary" value={id} onClick={(event) => handleRemove(event, id)}> Remove </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Container>
        )
*/



/*
return (
            <div className={style.container}>
                <Paper elevation={3}>
                    <Box p={3}>
                        <Typography variant="h4" align="center"> <b>Product {number}</b> </Typography>

                        <Box p={4}>
                            <Typography variant="h6">
                                <ProductInfo info="Name" value={product.name} />
                            </Typography>

                            <Typography variant="h6" paragraph={true}>
                                <ProductInfo info="Description" value={product.description} />
                            </Typography>

                            <Typography variant="h6" gutterBottom={true}>
                                <ProductInfo info="Qty. Available" value={product.quantity} />
                            </Typography>
                        </Box>

                        <Box align="center">
                            <Button className={style.button} variant="contained" color="primary" value={id} onClick={(event) => handleRemove(event, id)}> Remove </Button>
                        </Box>
                    </Box>
                </Paper>
            </div>
        )
*/